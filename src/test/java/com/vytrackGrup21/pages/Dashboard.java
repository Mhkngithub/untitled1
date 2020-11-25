package com.vytrackGrup21.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class Dashboard extends BasePage{



    @FindBy (xpath = "//th")
    public List<WebElement> ColumnsName;

    @FindBy(xpath = "/html/body/div[2]/div[2]/header/div[2]/ul/li[1]/a/span")
    public WebElement FleetTag;

    @FindBy(xpath = "/html/body/div[2]/div[2]/header/div[2]/ul/li[1]/div/div/ul/li[3]/a/span")
    public WebElement VehiclesModule;

    @FindBy(xpath = "(//tbody/tr[2]/td[1])[1]")
    public WebElement ClickPoint;

    @FindBy(xpath = "//label")
    public List<WebElement>CarGeneralInformanion;

  @FindBy(xpath = "//a[@class='btn main-group btn-primary pull-right ']")
  public WebElement CreateCarButton;

  @FindBy(xpath ="//input[@name='custom_entity_type[LicensePlate]']")
  public  WebElement LicancePlateBox;

  @FindBy(xpath = "//div[@class='oro-clearfix'][1]/input")
  public WebElement TagConvertableChosen;

  @FindBy(xpath = " //input[@value='sedan']")
  public WebElement TagConvertableChosen7;



  @FindBy(xpath = "(//input[@data-validation='{\"Date\":{}}'])[1]")
  public WebElement ImmatriculationDate;

  @FindBy(xpath = "//span[@class='select2-chosen']")
  public WebElement TransmissionBlok;

  @FindBy(xpath = "//select[@name='custom_entity_type[Transmission]']")
  public WebElement Transmission;

  @FindBy(xpath = "//option[@value='automatic']")
  public WebElement Automatic;

  @FindBy(xpath = "//select[@name='custom_entity_type[FuelType]']")
  public WebElement FeulType;

  @FindBy(xpath = "//option[@value='hybrid']")
  public WebElement Hybrid;

  @FindBy(xpath = "//button[@class='btn btn-success action-button']")
  public WebElement SaveButton;

  @FindBy(xpath = "//button[@class='btn btn-medium add-btn']")
  public WebElement VehicleMÖodelButton;

  @FindBy(xpath = "(//button[@class='btn btn-medium add-btn'])[2]")
  public WebElement VehicleMakeButton;

  @FindBy(xpath = "//button[@class='btn btn-success action-button']")
  public WebElement saveAndSubmit;


/*


   /* public void navigateToModule (String tab, String module ){

        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + tab + "' and contains(@class, 'title title-level-1')]")).click();
                                           //span[normalize-space()='Vehicles' and contains(@class, 'title title-level-1') ]


        BrowserUtils.waitFor(5);
        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + module + "' and contains(@class, 'title title-level-2')]")).click();
        BrowserUtils.waitFor(5);
    }
*/

}
