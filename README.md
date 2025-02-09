# YouTube Repeat Chrome Extension

![YouTube Repeat Logo](icons/loop-arrow-128.png)

## Overview

The YouTube Repeat Chrome Extension allows users to automatically repeat YouTube videos based on their preference for each tab. The extension provides a simple interface to enable or disable the repeat functionality directly from the browser's toolbar.

## Features

- **Repeat YouTube Videos**: Automatically repeat videos on YouTube when they finish playing.
- **Tab-Specific Settings**: Store repeat preferences for individual tabs, which are cleared when the tab is closed.
- **User Feedback**: Provides tooltips to guide users when the extension cannot be used.

## Installation

### From the Chrome Web Store

You can install the latest release of the YouTube Repeat extension directly from the [Chrome Web Store](https://chromewebstore.google.com/detail/youtube-repeat/mbimaenpniemflhmhbahldkfppflbcjh).

### Manual Installation

1. **Clone the Repository**: Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/yourusername/youtube-repeat.git
   ```

2. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click "Load unpacked" and select the `youtube-repeat` directory from your local machine.

## Usage

1. **Open YouTube**: Navigate to a YouTube video in your browser.
2. **Enable Repeat**: Click the extension icon in the toolbar to open the popup. Check the "Repeat Video" checkbox to enable repeat for the current tab.
3. **Tooltips**: 
   - If the tab is not a YouTube page, a red tooltip will inform you that the URL doesn't match YouTube.

## Development

### Folder Structure

- **`icons/`**: Contains the icon files used by the extension.
- **`manifest.json`**: The main configuration file for the Chrome extension.
- **`background.js`**: Handles background tasks, such as clearing storage when a tab is closed.
- **`content.js`**: Runs on YouTube pages, listening for video end events and checking if the video should repeat.
- **`popup.html`**: The HTML file for the popup interface.
- **`popup.js`**: Handles interactions within the popup, such as storing the repeat preference for the current tab.
- **`replay.js`**: Manages the logic for toggling the loop option on YouTube videos.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).
