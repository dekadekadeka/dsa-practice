# https://www.codewars.com/kata/51f2b4448cadf20ed0000386
import re

def remove_url_anchor(url):
  return re.sub(r"#\w+", "", url)

remove_url_anchor("www.codewars.com#about") # return "www.codewars.com"
remove_url_anchor("www.codewars.com/katas/?page=1#about") # return "www.codewars.com/katas/?page=1"
remove_url_anchor("www.codewars.com/katas/") # return "www.codewars.com/katas/"
