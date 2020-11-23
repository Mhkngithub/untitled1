package com.vytrackGrup21.pages;

import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import org.openqa.selenium.By;

public class Dashboard extends BasePage{

    public void navigateToModule (String tab, String module ){

        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + tab + "' and contains(@class, 'title title-level-1')]")).click();
                                           //span[normalize-space()='Vehicles' and contains(@class, 'title title-level-1') ]


        BrowserUtils.waitFor(3);
        Driver.get().findElement(By.xpath("//span[normalize-space(text())='"+module+"' and contains(@class, 'title title-level-2')]")).click();
        BrowserUtils.waitFor(1);
    }


}
