class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    let storedProducts = localStorage.products;
    let currentProducts = Seed.products;

    if (storedProducts) currentProducts = JSON.parse(storedProducts);
    this.setState({ products: currentProducts });
  }

  handleReset = () => {
    localStorage.removeItem('products');
    let currentProducts = Seed.products;

    this.setState({ products: currentProducts });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    localStorage.setItem('products', JSON.stringify(nextProducts));
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    const products = this.state.products;
    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        members={product.members}
      />
    ));
    return (
      <div>
        <button className="reset" onClick={this.handleReset}>Reset</button>
        <div className='activity-container'>
          {productComponents}
        </div>
      </div>
    );
  }
}

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render() {
    var myMembers = this.props.members || [];
    var members = myMembers.map(function(i) {
      return <span className="member" key={i}>{i}</span>
    });
    return (
      <div className='activity' onClick={this.handleUpVote}>
        <h2>{this.props.title}</h2>
        <span className="totalVotes">{this.props.votes}</span>
        <div className='content'>
          {members}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
