def make(woods):
    # Sort the woods by length in descending order
    woods.sort(reverse=True)

    # Initialize the result (list of planks)
    planks = []

    # Iterate over the sorted woods
    while woods:
        # Always take the longest wood
        plank = [woods.pop(0)]

        # Check for a smaller wood to pair with
        for i in range(len(woods)):
            if len(plank) == 1 and woods[i] < plank[0]:  # Pair only if the wood is shorter
                plank.append(woods.pop(i))
                break

        # Add the plank to the result
        planks.append(plank)

    return planks


def make_fence(woods = []):
    woods.append(0)
    print(woods)
    all_length = []
    joined_list = []

    for i, length in enumerate(woods):
        # print(i)
        the_list = []
        for second in range(i, len(woods)):
            # print(f"{length} {woods[second]}")
            if(i == second):
                continue
            the_list.append(length+woods[second])
            # print(the_list)
        print(the_list)
        all_length.append(list(set(the_list)))
        # print(all_length)

    for x in all_length:
        joined_list.extend(x)

    print(joined_list)
    reduced_list = set(joined_list)
    max_o = 0
    possible_answers = []
    for x in reduced_list:
        print(x, joined_list.count(x))
        if joined_list.count(x) > max_o:
            max_o = x



    return max_o
# Example input
woods = [2, 3, 4, 3, 3]

# Call the function
planks = make_fence(woods)

# Print the result
print(planks) 
# for i in range(5):
#     print(i)

