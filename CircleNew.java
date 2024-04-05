package classtest;

class CircleNew {
	
	private double radius;
	final double PI = 3.14;
	
	CircleNew() {
	}
	
	CircleNew(double radius) {
		this.radius = radius;
	}
	
	double getRadius() {
		return radius;
	}
	
	double getArea() {
		return PI * radius * radius;
	}
	
	void show(double radius, double area) {
		System.out.printf("반지름 = %.2f, 면적 = %.2f\n", radius, area);
	}
}