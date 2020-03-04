import React from 'react';
import '../App.css';
import Products from '../products.json';
import ProductCard from './ProductCard';
import ComparisonChart from './ComparisonChart';
import Attributes from './Attributes';
import {Modal} from './Modal';
import EditAttributes from './EditAttributes';

class App extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productSize: 0,
      selectedItems: {},
      countOfSelectedItems: 0,
      compareButtonEnabled: true,
      showComparisonChart: false,
      showModal: false,
      attributes : {
        "price": true, 
        "colors" : true, 
        "condition": true, 
        "vendors" : false
      },
      chartAttributes : {
        "price": true, 
        "colors" : true, 
        "condition": true, 
        "vendors" : false
      },
    }
  }

  componentDidMount() {
    console.log("Mounted!");
    let productsArray =  Products.products;
    // console.log(`products: ${productsArray}`);  why this is not working?
    console.log(productsArray);
    // console.log(productsList);
    if(productsArray) {
      this.setState({products: productsArray});
    }
    console.log(this.state.products);
  }

  compareButtonClicked = (id) => {
    console.log("compare button clicked with id: ", id);
    const selectedItemsObj = this.state.selectedItems;
    selectedItemsObj[id] = 1;
    const count = (this.state.countOfSelectedItems + 1);
    // console.log("count: ", count);
    this.setState({
      selectedItems: selectedItemsObj,
      countOfSelectedItems: count,
      compareButtonEnabled: false,
    });
    this.shouldShowComparisonChart(count);
  }

  removeButtonClicked = (id) => {
    console.log("remove button clicked for id: ", id);
    const selectedItemsObj = this.state.selectedItems;
    selectedItemsObj[id] = 0;
    const count = this.state.countOfSelectedItems - 1;
    this.setState({
      selectedItems: selectedItemsObj,
      countOfSelectedItems: count
    });
    this.shouldShowComparisonChart(count);
  }

  shouldShowComparisonChart = (count) => {
    console.log(`should show comparison chart check called for ${count} items`);
    if(count > 1) {
      this.setState({showComparisonChart : true});
    }
    else {
      this.setState({showComparisonChart : false});
    }
  }

  editAttributesListButtonClicked = () => {
    this.setState({showModal: true});
  }

  closeModalClicked = () => {
    this.setState({showModal: false});
  }

  toggleAttribute = (name) => {
    const listObj = this.state.attributes;
    listObj[name] = listObj[name] ? false : true;
    this.setState({attributes: listObj});
  }

  applyAttributesChangeToChart = () => {
    const obj = this.state.attributes;
    this.setState({chartAttributes: obj, showModal: false});
  }

  render() {
    const productList = this.state.products;
    return (
      <div className="App-parent">
        <Modal show = {this.state.showModal ? "true" : "false"}>
          <EditAttributes 
            attributesList={this.state.attributes}
            toggleAttribute = {(name) => this.toggleAttribute(name)}
            applyChange = {this.applyAttributesChangeToChart}
          >
            <button 
              className="close-modal-button"
              onClick = {() => {this.setState({showModal: false})}}
            >
              X
            </button>
          </EditAttributes>
        </Modal>
        <div className="product-listing" >
          {productList && productList.map((item) => {
              return <ProductCard 
                  key = {item.id}
                  id = {item.id}
                  name = {item.name}
                  description = {item.description}
                  price = {item.price}
                  image = {item.image}
                  compareModeEnabled = {this.state.compareButtonEnabled ? "true" : "false"}
                  isSelected = {(!this.state.compareButtonEnabled && this.state.selectedItems[item.id]) ? "true" : "false"}
                  compareButtonClicked = {(id) => this.compareButtonClicked(id)}
                  removeButtonClicked = {(id) => this.removeButtonClicked(id)}
                />
            })
          }
        </div>
        <div className="product-comparison">
          {(this.state.showComparisonChart) ?
            <div className="comparison-chart-parent">
              <Attributes 
                editAttributesListClicked = {this.editAttributesListButtonClicked}
                attributesList = {this.state.chartAttributes}
              />
              {productList.map((item) => {
                if(this.state.selectedItems[item.id]) {
                  return <ComparisonChart 
                    key = {item.id}
                    product = {item}
                    attributesList = {this.state.chartAttributes}
                  />
                }else return null;
              })}
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

export default App;
