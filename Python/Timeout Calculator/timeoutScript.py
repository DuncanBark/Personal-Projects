# Duncan Bark
# 5/8/19
# Functions for timeout.py

# Calculates estimatedRTT, DevRTT, and TimeoutInterval for a given
# alpha, beta, DEV, and RTT
def rttCalc(a, b, oldRtt, num, oldDev):
	print "----------------------------------------"
	usrIn = raw_input("Enter current RTT: ")
	currRtt = float(usrIn)
	newRtt = rtt(oldRtt, currRtt, a)
	newDev = dev(oldDev, currRtt, newRtt, b)
	print "estimatedRTT: " + str(newRtt)
	print "DevRTT: " + str(newDev)
	print "TimeoutInterval: " + str(tot(newRtt, newDev))
	if num > 1:
		rttCalc(a, b, newRtt, num - 1, newDev)

# calculates estimatedRTT using old(previous) RTT, current RTT and an alpha value
def rtt(oR, cR, a = .125):
	return (1 - a)*oR + a*cR

# calcuates RTT deviation using old(previous) DEV, current RTT, the new estimated RTT, and a beta value
def dev(oD, cT, nR, b = .25):
	return (1 - b)*oD + b*abs(cT - nR)

# calculates the TimeoutInterval for a given RTT and DEV.
def tot(nR, nD):
	return nR + 4*nD