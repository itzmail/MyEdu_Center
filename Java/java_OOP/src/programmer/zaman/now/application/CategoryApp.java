package programmer.zaman.now.application;

import programmer.zaman.now.data.Category;

public class CategoryApp {
    public static void main(String[] args){
        var category = new Category();
        category.setId("ID");
        category.setExpensive(false);
        System.out.println(category.getId());
        System.out.println(category.isExpensive());
    }
}
