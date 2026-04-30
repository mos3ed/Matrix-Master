#1

#Create a function that gets a number as a parameter,
#  and then prints the multiplication table for that number from 1 to 10. E.g.,
#  when the parameter is 12, the first line printed is “1 x 12 = 12”
#  and the last line printed is “10 x 12 = 120.”


# def multiplication_table(n):
#     for i in range(1, 11):
#         print(f"{i} x {n} = {i * n}")



#2

#Write a function that takes two strings as parameters. 
# The function returns the number of characters that the strings have in common. 
# Each character counts only once, e.g.,
#  the strings "bee" and "peer" only have one character in common (the letter “e”). 
# You can consider capitals different from lowercase letters. 
# Note: the function should return the number of characters that the strings have in common,
#  and not print it. To test the function, 
# you can print the result in your main program

# def common_characters(str1, str2):
#     set1 = set(str1)
#     set2 = set(str2)
#     common = set1.intersection(set2)
#     return len(common)



#3Write a guessing number function that holds a random number between 1 and 10 and get a parameter number
# . The return for that function will be :

# "Too big" if the parameter number is bigger than the held number.

# "Too small" if the parameter number is smaller than the held number.

# "You are SUPER" if the parameter number is the same as the held number.

# Enter the parameter number via the terminal with the help of the input method.

# M
# Comment


import random

def guess_number(user_guess):
    held_number = random.randint(1, 10)

    if user_guess > held_number:
        return "Too big"
    elif user_guess < held_number:
        return "Too small"
    else:
        return "You are SUPER"