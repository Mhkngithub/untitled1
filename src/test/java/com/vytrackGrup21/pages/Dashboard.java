package com.vytrackGrup21.pages;

import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class Dashboard extends BasePage{



    @FindBy (xpath = "//th")
    public List<WebElement> ColumnsName;

    @FindBy(xpath = "//span[@class='title title-level-1'][1]")
    public WebElement FleetTag;

    @FindBy(xpath = "//span[@class='title title-level-2'][1]")
    public WebElement VehiclesModule;

    @FindBy(xpath = "//tbody/tr[2]/td[1]")
    public WebElement ClickPoint;

    @FindBy(xpath = "//label")
    public List<WebElement>CarGeneralInformanion;


   @FindBy(xpath = "//a[@class='btn icons-holder-text no-hash']")
   public WebElement AddEventButton;

    @FindBy(xpath = "//input[@id='oro_calendar_event_form_title-uid-5fbd5bbfeb29b']")
    public WebElement EventTitle;

    @FindBy(xpath = "//body[@id='tinymce']")
    public WebElement EventDescription;

    @FindBy(xpath = "//span[@title='#51B749']")
    public WebElement EventColor;

    @FindBy(xpath = "//input[@id='oro_calendar_event_form_attendees-uid-5fbd5fb19c7db']")
    public WebElement EventGuest;

    @FindBy(xpath = "//div[text()='Driver Truck']")
    public WebElement EventGuestDriverTruck;

    @FindBy(xpath = "(//a[@class='btn add-list-item'])[2]")
    public WebElement EventRemanderAdd;

    @FindBy(xpath = "//select[@id='oro_calendar_event_form_reminders_1_method-uid-5fbd60a6a3896']")
    public WebElement EventRemanderAddMail;


    @FindBy(xpath = "//input[@id='oro_calendar_event_form_reminders_1_interval_number-uid-5fbd6882a4a78']")
    public WebElement EventRemanderMinuteBox;


    @FindBy(xpath = "//select[@id='oro_calendar_event_form_reminders_1_interval_unit-uid-5fbd60a6a3a89']")
    public WebElement EventRemanderAddMinute;

    @FindBy(xpath = "//input[@id='oro_calendar_event_form_use_hangout-uid-5fbd60a6a2faf']")
    public WebElement EventCallViaHangout;


    @FindBy(xpath = "//input[@data-entity-class='Oro_Bundle_UserBundle_Entity_User']")
    public WebElement EventContext;

    @FindBy(xpath = "(//span[@class='select2-chosen'])[2]")
    public WebElement EventOwner;

    @FindBy(xpath = "//input[@id='oro_calendar_event_form_organizerDisplayName-uid-5fbd60a6a4bca']")
    public  WebElement EventOrganazerName;

    @FindBy(xpath = "oro_calendar_event_form_organizerEmail")
    public WebElement EventOrganizerEmail;

    @FindBy(xpath = "//input[@id='date_selector_oro_calendar_event_form_start-uid-5fbd60a6a348c']")
    public WebElement EventStart;

    @FindBy ( xpath = "//input[@id='date_selector_oro_calendar_event_form_end-uid-5fbd60a6a357f']")
    public WebElement EventEventEnd;

    @FindBy(xpath = "(//button [@class='btn btn-primary'])[2]")
    public WebElement EventSaveButton;





    public void navigateToModule (String tab, String module ){

        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + tab + "' and contains(@class, 'title title-level-1')]")).click();
                                           //span[normalize-space()='Vehicles' and contains(@class, 'title title-level-1') ]


        BrowserUtils.waitFor(3);
        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + module + "' and contains(@class, 'title title-level-2')]")).click();
        BrowserUtils.waitFor(1);
    }


}
