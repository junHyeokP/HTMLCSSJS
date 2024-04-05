package classtest;

import java.util.Scanner;

public class CircleDemo2 {

	public static void main(String[] args) {
		
		System.out.print("원의 반지름 : ");
		Scanner in = new Scanner(System.in);
		
		// Circle 클래스 사용하여 원의 면적 구하여 출력
		CircleNew myCircle = new CircleNew(in.nextDouble());
		myCircle.show(myCircle.getRadius(), myCircle.getArea());
	}
}
