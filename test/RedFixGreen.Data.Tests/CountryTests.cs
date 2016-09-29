using NUnit.Framework;

namespace RedFixGreen.Data.Tests
{
    [TestFixture()]
    public class CountryTests
    {
        [Test]
        public void Name_Is_Immutable_Property()
        {
            // arrange
            var countryName = "Alethkar";

            // act
            var country = new Country(countryName);

            // assert
            Assert.AreEqual(countryName, country.Name);
        }
    }
}
