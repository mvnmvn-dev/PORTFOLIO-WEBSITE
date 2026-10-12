param(
  [int]$BlockSize = 5
)

$ErrorActionPreference = 'Stop'
if ($BlockSize -lt 2 -or $BlockSize -gt 16) {
  throw 'BlockSize must be between 2 and 16 pixels.'
}

Add-Type -AssemblyName System.Drawing

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$sourceDirectory = Join-Path $projectRoot 'images'
$outputDirectory = Join-Path $sourceDirectory 'monochrome'
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$assets = @(
  @{ Source = 'lacs.png'; Output = 'lacs.png' },
  @{ Source = 'osas.png'; Output = 'osas.png' },
  @{ Source = 'oxford.png'; Output = 'oxford.png' },
  @{ Source = 'archon-nell.png'; Output = 'faci-admin.png' },
  @{ Source = 'apple-website.png'; Output = 'iphone-16-concept.png' }
)

$grayMatrix = [System.Drawing.Imaging.ColorMatrix]::new()
$grayMatrix.Matrix00 = 0.299; $grayMatrix.Matrix01 = 0.299; $grayMatrix.Matrix02 = 0.299
$grayMatrix.Matrix10 = 0.587; $grayMatrix.Matrix11 = 0.587; $grayMatrix.Matrix12 = 0.587
$grayMatrix.Matrix20 = 0.114; $grayMatrix.Matrix21 = 0.114; $grayMatrix.Matrix22 = 0.114
$grayMatrix.Matrix33 = 1.0; $grayMatrix.Matrix44 = 1.0

foreach ($asset in $assets) {
  $sourcePath = Join-Path $sourceDirectory $asset.Source
  $outputPath = Join-Path $outputDirectory $asset.Output
  if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
    throw "Missing source screenshot: $sourcePath"
  }

  $source = [System.Drawing.Image]::FromFile($sourcePath)
  $gray = $null
  $small = $null
  $pixelated = $null
  $grayGraphics = $null
  $downGraphics = $null
  $upGraphics = $null
  $attributes = $null
  try {
    $width = $source.Width
    $height = $source.Height
    $gray = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $grayGraphics = [System.Drawing.Graphics]::FromImage($gray)
    $attributes = [System.Drawing.Imaging.ImageAttributes]::new()
    $attributes.SetColorMatrix($grayMatrix)
    $destination = [System.Drawing.Rectangle]::new(0, 0, $width, $height)
    $grayGraphics.DrawImage($source, $destination, 0, 0, $width, $height, [System.Drawing.GraphicsUnit]::Pixel, $attributes)

    $smallWidth = [Math]::Max(1, [int][Math]::Round($width / $BlockSize))
    $smallHeight = [Math]::Max(1, [int][Math]::Round($height / $BlockSize))
    $small = [System.Drawing.Bitmap]::new($smallWidth, $smallHeight, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $downGraphics = [System.Drawing.Graphics]::FromImage($small)
    $downGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $downGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $downGraphics.DrawImage($gray, [System.Drawing.Rectangle]::new(0, 0, $smallWidth, $smallHeight))

    $pixelated = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $upGraphics = [System.Drawing.Graphics]::FromImage($pixelated)
    $upGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
    $upGraphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
    $upGraphics.DrawImage($small, [System.Drawing.Rectangle]::new(0, 0, $width, $height))
    $pixelated.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

    Write-Output ("{0} -> {1} ({2}x{3}, {4}px blocks)" -f $asset.Source, $outputPath, $width, $height, $BlockSize)
  }
  finally {
    if ($attributes) { $attributes.Dispose() }
    if ($grayGraphics) { $grayGraphics.Dispose() }
    if ($downGraphics) { $downGraphics.Dispose() }
    if ($upGraphics) { $upGraphics.Dispose() }
    if ($gray) { $gray.Dispose() }
    if ($small) { $small.Dispose() }
    if ($pixelated) { $pixelated.Dispose() }
    $source.Dispose()
  }
}
