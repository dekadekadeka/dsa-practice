def find_deleted_number(arr, mixed_arr)
  arr.reject { |num| mixed_arr.include? num }.first || 0
end

find_deleted_number([1,2,3,4,5], [3,4,1,5]) # return 2
find_deleted_number([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) # return 5
find_deleted_number([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) # return 0 because no number was deleted
