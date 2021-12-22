#!/bin/bash
for size in 16 32 64 128 256; do
   magick convert -verbose $1 -background transparent -resize $size\x$size -gravity Center -extent $size\x$size -alpha Background $size\x$size.png
done
size=16
magick convert -verbose $1 -background transparent -resize $size\x$size -gravity Center -extent $size\x$size -alpha Background $size\x$size.ico
