export default function CreateInvoiceForm() {
  return (
    <>
      <form>
        <div>
          <p>Bill From</p>
          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="10 Union Teracce"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="London" />
          </div>
          <div>
            <label htmlFor="postCode">Post Code</label>
            <input type="text" name="postCode" placeholder="E1 2EZ" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" placeholder="United Kingdom" />
          </div>
        </div>
        <div>
          <p>Bill To</p>
          <div>
            <label htmlFor="clientName">Client`s Name</label>
            <input type="text" name="clietName" placeholder="Alex Grim" />
          </div>
          <div>
            <label htmlFor="clientEmail">Client`s Email</label>
            <input
              type="text"
              name="clientEmail"
              placeholder="alexgrim@mail.com"
            />
          </div>
          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="84 Church Way"
            />
          </div>
          <div>
            <div>
              <label htmlFor="cityClient">City</label>
              <input type="text" name="cityClient" placeholder="Bradford" />
            </div>
            <div>
              <label htmlFor="postCodeClient">Post Code</label>
              <input type="text" name="postCodeClient" placeholder="BD1 9PB" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
