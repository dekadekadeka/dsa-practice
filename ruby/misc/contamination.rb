# https://www.codewars.com/kata/596fba44963025c878000039
def contamination(text, char)
  char * text.length
end

contamination("abc","z") # return "zzz"
contamination("","z") # return ""
contamination("abc","") # return ""
contamination("_3ebzgh4","&") # return "&&&&&&&&"
contamination("//case"," ") # return "      "