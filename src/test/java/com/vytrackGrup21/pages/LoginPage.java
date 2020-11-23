package com.vytrackGrup21.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {



    @FindBy(xpath ="//input[@id='prependedInput']")
    public WebElement userName;

    @FindBy(xpath = "//input[@id='prependedInput2']")
    public  WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement loginButton;



}
