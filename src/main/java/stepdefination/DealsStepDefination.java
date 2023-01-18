package stepdefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealsStepDefination {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	 public void user_already_on_login_page(){
			System.setProperty("webdriver.gecko.driver", "/Users/jayas/Desktop/SeleniumJars//geckodriver");
			driver = new FirefoxDriver();
			driver.get("https://classic.crmpro.com/");
	 }
	
	
	 @When("^title of login page is Free CRM$")
	 public void title_of_login_page_is_free_CRM(){
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	 }
	
	 @Then("^user enters username and password$")
	 public void user_enters_username_and_password1(DataTable login){
		 List<List<String>> logindata = login.raw();
	 driver.findElement(By.name("username")).sendKeys(logindata.get(0).get(0));
	 driver.findElement(By.name("password")).sendKeys(logindata.get(0).get(1));
	 }
	
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
	 WebDriverWait wait = new WebDriverWait(driver, 10);
	 wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader"))); //Extra wait time
	 driver.findElement(By.xpath("//input[@type='submit']")).click();
	 }
	
	
	 @Then("^user is on home page$")
	 public void user_is_on_hopme_page() throws InterruptedException{
	 Thread.sleep(3000);
	 String title = driver.getTitle();
	 Assert.assertEquals("CRMPRO", title);
	 }
	 
	@Then("^user click on the NewDeal$")
	public void user_click_on_the_NewDeal() throws Throwable {
		driver.switchTo().frame("mainpanel");
		  WebElement deals = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		  Actions action = new Actions(driver);
		  action.moveToElement(deals).build().perform();
		  driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters for  NewDeal #Title Company Amount Probability Commission$")
	public void user_enters_for_NewDeal_Title_Company_Amount_Probability_Commission(DataTable dealdatas) throws Throwable {
	  List<List<String>> dealdata =  dealdatas.raw();
	  driver.findElement(By.id("title")).sendKeys(dealdata.get(0).get(0));
	  driver.findElement(By.name("client_lookup")).sendKeys(dealdata.get(0).get(1));
	  driver.findElement(By.id("amount")).sendKeys(dealdata.get(0).get(2));
	  driver.findElement(By.id("probability")).sendKeys(dealdata.get(0).get(3));
	  driver.findElement(By.id("commission")).sendKeys(dealdata.get(0).get(4));
	}
	
	@Then("^user click on save button$")
	public void user_click_on_save_button() throws Throwable {
	  driver.findElement(By.xpath("//input[@class='button' and @type='submit']")).click();
	}

	@Then("^user verify Deal$")
	public void user_verify_Deal() throws Throwable {
	   System.out.println(driver.findElement(By.xpath("//td[@class='tabs_header']")).getText());
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	  driver.quit();
	}



}
