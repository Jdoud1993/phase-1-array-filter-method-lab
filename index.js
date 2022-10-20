// Code your solution here
const driversNames = ["Josh", "Kim", "Everlynn", "Dave", "Laurie"]

function findMatching (arr, str) {
   return arr.filter((driver) => driver.toLowerCase().includes(str.toLowerCase()))
}

function fuzzyMatch (arr, str) {
    return arr.filter((driver) => driver.charAt(0) === str.charAt(0))
}

function matchName (arr, str) {
    return arr.filter((driverInfo) => driverInfo.name.toLowerCase().includes(str.toLowerCase()))
}