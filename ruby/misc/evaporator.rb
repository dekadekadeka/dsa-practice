# https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/
def evaporator(content, evap_per_day, threshold)
  # content of the evaporator (content in ml) - mandatory to pass tests but not necessary for use
  # percentage of foam or gas lost every day (evap_per_day)
  # the threshold (threshold) in percentage beyond which the evaporator is no longer useful
  
  # full content percentage
  available_content = 100
  # days before the available content gets below the threshold
  days = 0
  
  while available_content > threshold
    # evap_per_day * 0.01 because it's a percentage
    available_content = available_content - (available_content * (evap_per_day * 0.01))
    # add a day
    days += 1
  end

  days
end

evaporator(10, 10, 5) # return 29
evaporator(10, 10, 10) # return 22
