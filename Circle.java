package classtest;

public class Circle {
	
	public double radius;
	final double PI = 3.14;
	
	double calRadius(double radius) {
	this.radius = radius;
	return PI * radius * radius;
	}
	
	void Result() {
		System.out.printf("반지름 = %.2f, 면적 = %.2f\n", radius, calRadius(radius));
	}

}
