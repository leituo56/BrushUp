// 1.2 Implement a function void reverse(char* str) in C or C++ which reverses a null- terminated string.

#include <iostream>
#include <cstring>

using namespace std;

// O(n) Implementation
void reverseStr(char * str){
	if(!str){
		cout << "Null string!" << endl;
		return;
	}
	char* end = str;
	char temp;
	
	//move end pointer just before '\0'
	while(*end)
		end++;
	end--;

	//swap between two sides
	while(str < end){
		temp = *str;
		*str++ = *end;
		*end-- = temp;
	}
}

// Related Question: print a char* str reversely using recursive call
void reversePrint(char * str){
	char c = *str;
	if(c=='\0'){
		return;
	}
	reversePrint(++str);
	cout << c;
}


int main(int argc, char const *argv[]){
	char* str1 = strdup("Hello!");
	reverseStr(str1);
	cout << str1 << endl;
	
	reversePrint(str1);
	
	return 0;
}