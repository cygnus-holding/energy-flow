import numpy as np


#Calculation for energy demand 

def calc_power(power, duration):
    '''
    power = power during duration time  [kW]
    duration = duration of power [min]
    '''
    power = power*(duration/60) #[kWh] 
    return power


def calc_peak_and_normal_power(peak, peak_duration, run_power, normal_duration):
    '''
    peak = peak power [kW]
    peak_duration = duration of peak power [min]
    run_power = normal running power [kW]
    normal_duration = duration of peak power [min]
    '''

    peak_power = calc_power(peak, peak_duration)
    normal_power = calc_power(run_power, normal_duration)

    total_power = peak_power + normal_power #[kWh] // total power usage for a process

    return total_power


def calc_total_power(list_e, subprocess):
    '''
    list_e = list of objects from class Energy
    subprocess = the number of subprocesses, where 1 if there are no subprocesses
    '''
    total_power = 0

    #iterate through list_e and add to total power, until number of subprocesses are reached 
    for i in range (0,subprocess):
        total_power += calc_peak_and_normal_power(list_e[i].peak,list_e[i].peak_duration, list_e[i].run_power, list_e[i].normal_duration )

    return total_power


