/**
 * Generic Service class for our models to do handle errors and logic
 */
class GenericService {
  /**
   * @param model - the class you wish to the Service to use
   */
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    try {
      const foundModels = await this.model.findAll();
      return { statusCode: 200, model: foundModels };
    } catch (error) {
      console.error(error);
      return { statusCode: 500 };
    }
  }

  async findByPk(id){
    try {
      const foundUser = await this.model.findByPk(id);
      if (foundUser) {
        return { statusCode: 200, model: foundUser };
      } else {
        return { statusCode: 404 };
      }
    } catch (error) {
      console.error(error);
      return { statusCode: 500 };
    }
  }

  async save(object)  {
    try {
      const savedModel = await object.save();
      return { statusCode: 200, model: savedModel };
    } catch (error) {
      console.error(error);
      return { statusCode: 500 };
    }
  }

  async update(id, newAttributes)  {
    try {
      const modelToUpdate = await this.model.findByPk(id);
      
      if (modelToUpdate) {
        try {
          const updatedModel = await modelToUpdate.update(newAttributes);
          
          return { statusCode: 200, model: updatedModel };
        } catch (error) {
          return { statusCode: 400 };
        }
      } else {
        return { statusCode: 404 };
      }
    } catch (error) {
      console.error(error);
      return { statusCode: 500 };
    }
  }

  async delete(id) {
    try {
      const modelToDelete = await this.model.findByPk(id);

      if (modelToDelete) {
        modelToDelete.destroy();
        return { statusCode: 202 };
      } else {
        return { statusCode: 404 };
      }
    } catch (error) {
      console.error(error);
      return { statusCode: 500 };
    }
  }
}

export { GenericService };
