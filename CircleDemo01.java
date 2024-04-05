package classtest;

import java.util.Scanner;

public class CircleDemo01 {

	public static void main(String[] args) {
		
		System.out.print("원의 반지름 : ");
		Scanner sc = new Scanner(System.in);
		Circle one = new Circle();
		
		//Circle 클래스 사용하여 원의 면적 구하기
		one.calRadius(sc.nextDouble());
		one.Result();
		
	}
}
