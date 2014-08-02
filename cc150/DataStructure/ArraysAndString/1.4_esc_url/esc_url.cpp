//1.4 Write a method to replace all spaces in a string with'%20'. 
//You may assume that the string has sufficient space at the end of the string to hold the additional characters, 
//and that you are given the "true" length of the string. 
//(Note: if implementing in Java, please use a character array so that you can perform this operation in place.)   
//EXAMPLE: Input: "Mr John Smith" Output: "Mr%20Dohn%20Smith"


#include <iostream>
#include <cstring>

using namespace std;

void escUrl(char* str, int length){
	int numOfSpace = 0;
	while(str){
		if (*str == ' '){
			numOfSpace++;
			str++;
		}
		if (numOfSpace > 50){
			break;
		}
	}
	cout << numOfSpace;
	return str;
}


int main(int argc, char const *argv[])
{
	char* str = new char[50];
	strcpy(str, "Mr John Smith");

	escUrl(str);
	cout << str << endl;
	return 0;
}