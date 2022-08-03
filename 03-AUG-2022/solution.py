# CW

# Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:
# name + " plays banjo"
# name + " does not play banjo"

# Names given are always valid strings.

def are_you_playing_banjo(name):
    # Implement me!
    if (name[0] == 'R' or name[0] == 'r'):
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
    
# The idea of this solution is that we can index the string, so we can get the first letter of the name with the 0th index.