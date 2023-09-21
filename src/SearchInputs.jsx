import {Input, Button } from 'reactstrap'

function SearchInputs(){
    return (
        <div class="container-sm mt-5">
        <div className="row">
          <div className="col-8">
            <Input placeholder="Pesquisar produto"/>
          </div>
          <div className="col-2">
            <Button  color="primary" >Ok</Button>
          </div>
        </div>
      </div>
    )
}

export default SearchInputs