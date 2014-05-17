#include <iostream>
#include <cstring>
#include <cstdlib>
using namespace std;

struct fraction{
	int num;
	int denum;
};
struct student{
	char * name;
	char suid[8];
	int age;
};

void swap(void* vp1, void* vp2, int size);
void* lsearch(void* key, void* base, int n, int elemSize);
void* lsearch(void* key, void* base, int n, int elemSize
	, int (*cmpfn)(void*, void*) );
int intCmp(void* elem1, void* elem2);
int StrCmp(void* vp1, void* vp2);

int main(int argc, char const *argv[])
{
	//assign
	int i = 37;
	float j = *(float*)&i;
	cout << j << endl;

	float f = 7.0;
	short s = *(short*)&f;
	cout << s << endl;

	short s2 = 45;
	long d = *(long*)&s2;
	cout << d << endl;
	
	//mem of struct
	fraction pi;
	pi.num = 22;
	pi.denum = 7;
	int a = 10;
	cout << pi.num << ", " << pi.denum << endl;
	( (fraction*)&(pi.denum) )->num=12;
	cout << pi.num << ", " << pi.denum << endl;

	//mem of array
	int array[5];
	cout << array[6] << "; " << array[-1] << endl;
	array[3] = 128;
	((short*)array)[7] = 2;
	cout << array[3] << endl;
	cout << array << endl;

	//strcpy, write to other mem
	student pupils[4];
	pupils[0].age = 21;
	pupils[2].name = strdup("Adam");
	pupils[3].name = pupils[0].suid + 6;
	strcpy(pupils[1].suid, "40415xx");
	strcpy(pupils[3].name, "123456");
	cout << pupils[0].age << endl;

	//generic c swap
	int i1 = 10;
	int i2 = 20;
	swap(&i1, &i2, sizeof(int));
	cout << i1 << ", " << i2 << endl;

	//swap addr
	char * husband = strdup("Fred Williams");
	char * wife = strdup("Wilma Shinderwolf");
	swap(&husband, &wife, sizeof(char*));
	cout << husband << ", " << wife << endl;

	//generic linear search
	int array2[] = {4, 2, 3, 7, 11, 6};
	int size = 6;
	int number = 7;
	int* found = (int*)lsearch(&number, array2, size, sizeof(int), intCmp);
	if(found != NULL)
		cout << *found << endl;
	
	char* notes[]={"Ab", "F#", "B", "Gb", "D"};
	char* favNote = "Ab";
	char** found2 = (char**)lsearch(&favNote, notes, 5, sizeof(char*), StrCmp);
	if(found2)
		cout << *found2 << endl;
	else
		cout << "Not found!" << endl;
	return 0;
}

//generic c swap
void swap(void* vp1, void* vp2, int size){
	char buffer[size];
	// char * buffer = (char*)malloc(size * sizeof(char));
	memcpy(buffer, vp1, size);
	memcpy(vp1, vp2, size);
	memcpy(vp2, buffer, size);
}

//generic c linear search
void* lsearch(void* key, void* base, int n, int elemSize){
	for(int i=0; i < n; i++){
		void* elemAddr = (char*)base + i * elemSize;
		if(memcmp(key, elemAddr, elemSize) == 0)
			return elemAddr;
	}
	return NULL;
}
void* lsearch(void* key, void* base, int n, int elemSize
	, int (*cmpfn)(void*, void*) ){
	for(int i=0; i < n; i++){
		void* elemAddr = (char*)base + i * elemSize;
		if(cmpfn(key, elemAddr) == 0)
			return elemAddr;
	}
	return NULL;
}
int intCmp(void* elem1, void* elem2){
	int* ip1 = (int*)elem1;
	int* ip2 = (int*)elem2;
	return *ip1 - *ip2;
}
int StrCmp(void* vp1, void* vp2){
	char * s1 = *(char **)vp1;
	char * s2 = *(char **)vp2;
	return strcmp(s1, s2);
}