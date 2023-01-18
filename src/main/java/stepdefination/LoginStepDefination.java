//package stepdefination;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//import org.junit.Assert;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class LoginStepDefination{
//
//	public static WebDriver driver;
//
//	
//	 @Given("^user is already on Login Page$")
//	 public void user_already_on_login_page(){
//			System.setProperty("webdriver.gecko.driver", "/Users/jayas/Desktop/SeleniumJars//geckodriver");
//			driver = new FirefoxDriver();
//	 driver.get("https://classic.crmpro.com/");
//	 }
//	
//	
//	 @When("^title of login page is Free CRM$")
//	 public void title_of_login_page_is_free_CRM(){
//	 String title = driver.getTitle();
//	 System.out.println(title);
//	 Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
//	 }
//	
//	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
//	 public void user_enters_username_and_password(String username, String password){
//	 driver.findElement(By.name("username")).sendKeys(username);
//	 driver.findElement(By.name("password")).sendKeys(password);
//	 }
//	
//	 @Then("^user clicks on login button$")
//	 public void user_clicks_on_login_button() {
//	 WebDriverWait wait = new WebDriverWait(driver, 10);
//	 wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader"))); //Extra wait time
//	 driver.findElement(By.xpath("//input[@type='submit']")).click();
//	 }
//	
//	
//	 @Then("^user is on home page$")
//	 public void user_is_on_hopme_page() throws InterruptedException{
//	 Thread.sleep(3000);
//	 String title = driver.getTitle();
//	 Assert.assertEquals("CRMPRO", title);
//	 }
//	 
//	 @Then("^user click on the NewContact$")
//	 public void user_click_on_the_NewContact() throws Throwable {
//	  driver.switchTo().frame("mainpanel");
//	  WebElement contact = driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
//	  Actions action = new Actions(driver);
//	  action.moveToElement(contact).build().perform();
//	  driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//	 }
//	
//	 @Then("^user enters for  NewContact \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\"$")
//	 public void user_enters_for_NewContact_and(String FirstName, String LastName, String Company, String Country) throws Throwable {
//		 driver.findElement(By.id("first_name")).sendKeys(FirstName);
//		 driver.findElement(By.id("surname")).sendKeys(LastName);
//		 driver.findElement(By.name("client_lookup")).sendKeys(Company);
//		 driver.findElement(By.name("country")).sendKeys(Country);
//
//	 }
//
//	 @Then("^user click on save button$")
//	 public void user_click_on_save_button() throws Throwable {
//	// driver.findElement(By.xpath("input[@class='button' and @value='Save]")).click();
//	 driver.findElement(By.xpath("//input[@class='button' and @type='submit']")).click();
//	 }
//
//	 @Then("^user verify Contact$")
//	 public void user_verify_Contact() throws Throwable {
//	    WebElement contactHeader = driver.findElement(By.xpath("//td[@class='tabs_header']"));
//	    System.out.println(contactHeader.getText());
//	  }
//	 
//
//	 @Then("^Close the browser$")
//	 public void close_the_browser(){
//		 driver.quit();
//	 }
//	
//	
//	
//
//}