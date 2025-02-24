# https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
# python lambda function
# l: the list passed in as an argument
# list() makes a list out of the filter object created in the next step
# filter() has two params: the filter function (a lambda in itself) and the list to filter
# in JS, this would be l.filter(num => num % 2 !== 0), except it doesn't need to be
# converted back into an array like we do in Python

# my solution
odds = lambda l: list(filter(lambda num: num % 2 != 0, l))

# cleaner solution using list comprehension
# odds = lambda l: [num for num in l if num % 2]

odds([]) # return []
odds([2,4,6]) # return []
odds([1,3,5]) # return [1,3,5]
odds([1, 2, 3, 4, 5, 6]) # return [1, 3, 5]
