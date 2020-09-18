export default function cutText(str, maxLen = 17, separator = ' '){
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
  }
