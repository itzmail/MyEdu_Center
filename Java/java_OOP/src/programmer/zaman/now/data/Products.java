package programmer.zaman.now.data;

public class Products {
    public String name; // protected => hanya bisa diakses maksimal hanya sampai sesama package, diluar package tidak bisa
    public int price;

    public Products(String name, int price){
        this.name = name;
        this.price = price;
    }

}
