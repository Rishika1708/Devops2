class 2ndLargestValue 
{
	public static void main(String[] args) 
	{
		int a[]={9,10,3,5,30,49,28,6,1,20};
		int b=a[0];
		int c=a[1];
		for(int i=0;i<a.length;i++)
		{
			if(c>a[1])   //if(b<a[i])
			{
				c=a[i];
			}
		}
		System.out.println("small value is: "+b);
		//System.out.println("Big value is: "+b);
		System.out.println("Hello World!");
	}
}
