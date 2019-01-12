/* Q1. Newton Second Law

ALGORITHM
    1. Calculate Newton Force by using the formula ΣF = m x a 
    2. Input the mass (m) given to 600 kg
    3. Input the acceleration (a) to 2 m/s2
    4. Multiply mass with acceleration to get the result newton force. 

PSEUDOCODE
    STORE "Mass" with 600 kg
    STORE "Acceleration" with value 2 m/s2
    STORE "Resultan Gaya" without any value
    
    CALCULATE "Mass" times "Acceleration"
    SET "Resultan Gaya" value with calculation result

    DISPLAY "NET FORCE"

Q2. Tahun Kabisat (Leap Year)

ALGORITHM
    1. Choose the year to check whether it will be a Leap Year or not.
    2. One way to determine whether the year is a leap year, 
       divide the Year with the number 4 and 100.
    3. If the year is fully divisible by 4 and not fully divisible by 100, 
       the year is a Leap Year.
    4. Another way to determine whether the year is a leap year, is to divide the 
       Year with the the number 4, 100 and 400.
    5. If the Year is fully divisible by 4 as well as the number 100 and 400,
       the Year is a Leap Year.

PSEUDOCODE
    READ "Year"
    READ "is a Leap Year"
    
        IF "Year" is fully divisible by "4" and not fully divisible by "100" 
            SET "is a Leap Year" to true
        ELSE
            SET "is a Leap Year" to false

        IF "Year" is fully divisible by "4", "100" and "400"
            SET "is a Leap Year" to true
        ELSE 
            SET "is a Leap Year" to false

Q3. Laundry Day

ALGORITHM
    1. Bring the laundry basket containing 20 dirty clothes to the washing machine.
    2. Open the washing machine lid.
    3. Put all the 20 dirty clothes one by one or in bulk into the washing machine drum. 
    4. Turn on the washing machine.
    5. Pour liquid detergent into the detergent compartment.
    6. Choose the washing option based on the type of 
       clothes and your desired washing preference.
    7. Wait for the washing machine to finish.
    8. Once the wash has ended, take out all the 20 washed clothes and hang it to dry.

PSEUDOCODE
    STORE "Clothes" with value "20"

    WHILE "Clothes" < 20
        ADD "Clothes" by 1
    
    DISPLAY "Start Wash!"
    
Q4. Periksa Kuku

ALGORITHM
    1. The morning before the school starts.
    2. Gather all the 40 students present in class and inform them
       that you are going to conduct a nail check.
    3. Ask all of the students to line up and be ready to show their 
       nails when it's their turn.
    4. Students who are found to have long nails are asked to 
       stand at the back of the class.
    5. Students with short nails are asked to go back to their respective seat.
    6. Punish all the students with long nails.

PSEUDOCODE
    STORE "Nail" with 40
    
    WHILE "Nail" less than 40 

    IF "Nail" is long THEN
    DISPLAY "Punish"
    ELSE
    IF "Nail" is short THEN
    DISPLAY "Go back to seats"
*/
