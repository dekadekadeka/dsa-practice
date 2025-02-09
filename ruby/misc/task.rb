def task(w,n,c)
  weekdays = { 'Monday': 'James', 'Tuesday': 'John', 'Wednesday': 'Robert', 'Thursday': 'Michael', 'Friday': 'William' }
  
  "It is #{w} today, #{weekdays[w.to_sym]}, you have to work, you must spray #{n} trees and you need #{n * c} dollars to buy liquid"
end

task('Wednesday',10,2) # return 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
task('Monday',4,3) # return 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'
