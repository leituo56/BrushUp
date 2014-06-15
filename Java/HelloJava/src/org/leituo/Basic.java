package org.leituo;

import javax.swing.*;
import java.io.*;
import java.util.Scanner;

/**
 * Created by leituo56 on 5/7/14.
 */
public class Basic {
    Basic(){
        //run();
        //input();
        //testArray();
        //testString();
        testFile();
    }
    public void testFile(){
        File f = new File("data.txt");
        System.out.println(f.getAbsolutePath());
        try {
            if(!f.exists())
                f.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(f.exists());
        try {
            PrintWriter pw = new PrintWriter(f);
            pw.println("Hello");
            pw.println("This is Java!");
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try {
            FileWriter fw = new FileWriter(f,true);
            BufferedWriter bw = new BufferedWriter(fw);

            bw.write("!!!");
            bw.close();
        } catch (FileNotFoundException e){
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            Scanner sc = new Scanner(f);
            while (sc.hasNext()){
                System.out.println(sc.nextLine());
            }
            sc.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
    public void testString(){
        String str1 = "Hello";
        String str2 = new String("Hello");
        System.out.println(str1 == str2);
        System.out.println(str1.equals(str2));
        System.out.println(str1.compareTo(str2));
        System.out.println(str1.substring(1,3));
        str1.indexOf("el");
        System.out.println(str1.replaceAll("^He", "hi"));
        StringBuffer sb1 = new StringBuffer("Buffer is good!");
        sb1.append("@");
        sb1.insert(3,"#");
        System.out.println(sb1);

    }
    public void run(){
        byte b = 127;
        System.out.println(System.currentTimeMillis());
        int i = (int) (3 / 2.0);
        System.out.println(i);
        System.out.println(System.currentTimeMillis());
    }
    public void testArray(){
        int[] array = new int[5];
        int[] array2 = {5,6,7,8,9};

        for (int item:array2){
            item = item * item;
            System.out.println(item);
        }
        for (int i = 0; i < array.length; i++) {
            array[i] = i * i;
            System.out.println(array[i]);
            System.out.println(array2[i]);
        }
        int[] array3 = new int[5];
        //copy
        System.arraycopy(array2,0,array3,0,array2.length);
    }
    private void input(){
        String str = JOptionPane.showInputDialog("Input a num!");
        int k = Integer.parseInt(str);
        System.out.println(k);

        double radius;
        double area;
        System.out.println("Input a radius!");
        Scanner input = new Scanner(System.in);
        radius = input.nextDouble();
        area = Main.PI * Math.pow(radius, 2);
        System.out.println(area);
    }
}
