// optimize svg code
cleanSvg(svgContent) {
    svgContent = svgContent
      .replace(/<\?xml.*\?>/g, '')
      .replace(/<!DOCTYPE.*>/g, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/width="([^"]+)"/, '')
      .replace(/height="([^"]+)"/, '')
      .trim();
    return svgContent;
}
