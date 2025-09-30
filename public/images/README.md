# Images Folder

This folder contains all the images used in The Jericho Project website. Replace the placeholder images with your own photos to customize the site.

## Folder Structure

### `/hero/`
Contains the main background image for the hero section:
- `hero-background.jpg` - Main hero section background image (recommended size: 1920x1080 or larger)

### `/gallery/`
Contains all gallery photos displayed in the photo gallery section:
- `bible-scripture.jpg` - Bible with Joshua scripture
- `team-with-jericho.jpg` - Team with Jericho the wolf dog (this will be displayed larger)
- `community-service.jpg` - Community service work scene
- `jericho-before.jpg` - Jericho before grooming
- `team-building-trampoline.jpg` - Team building trampoline
- `jericho-after.jpg` - Jericho after grooming

## Image Guidelines

### Recommended Specifications:
- **Format**: JPG, PNG, or WebP
- **Gallery Images**: 800x600 pixels minimum (4:3 aspect ratio preferred)
- **Hero Background**: 1920x1080 pixels minimum (16:9 aspect ratio)
- **File Size**: Keep under 2MB per image for optimal loading

### Tips:
1. Use descriptive filenames that match the content
2. Ensure good image quality but optimize for web (compress if needed)
3. The gallery images will be displayed with a slight rotation effect
4. The hero background image will have an overlay, so choose images that work well with text on top

## How to Replace Images

1. Add your images to the appropriate folder (`hero/` or `gallery/`)
2. Make sure the filenames match exactly what's specified above
3. The website will automatically load your new images when you refresh the page

## Need Different Images?

If you want to add more gallery images or change the image names, you'll need to update the `photos` array in `/src/App.tsx`.
