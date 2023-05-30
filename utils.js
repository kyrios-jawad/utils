// optimize svg code
const cleanSvg = (svgContent) =>{
    svgContent = svgContent
      .replace(/<\?xml.*\?>/g, '')
      .replace(/<!DOCTYPE.*>/g, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/width="([^"]+)"/, '')
      .replace(/height="([^"]+)"/, '')
      .trim();
    return svgContent;
}
// encoding query string
const removeUndefinedData = (query) =>{
  Object.keys(query).forEach(
    (key) =>
      !query[key] && typeof query[key] != 'boolean' && delete query[key]
  );
  return query;
}
const encodeQueryData = (query) =>{
  query = this.removeUndefinedData(query);
  const ret = [];
  for (let d in query)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(query[d]));
  return ret.join('&');
}
