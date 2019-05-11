# Duncan Bark
# 5/8/19
# Calculates estimated RTT, RTT Deviation, and TimeoutInterval for
# given RTTs, DEV, alpha value and beta value, for a given number
# of steps
from timeoutScript import rttCalc

usrIn = raw_input("Enter preliminary RTT: ")
prelimRTT = float(usrIn)

usrIn = raw_input("Enter preliminary DEV: ")
prelimDEV = float(usrIn)

usrIn = raw_input("Enter alpha: ")
alpha = float(usrIn)

usrIn = raw_input("Enter beta: ")
beta = float(usrIn)

usrIn = raw_input("Enter times to run: ")
numRun = float(usrIn)

rttCalc(alpha, beta, prelimRTT, numRun, prelimDEV)