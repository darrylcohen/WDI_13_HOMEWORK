class Client

  def initialize name, num_children, age
    @name = name
    @num_children = num_children
    @age = age
    @pets = []
  end

  def adopt a_pet
    @pets.push a_pet
  end

  def get_name
    @name
  end

  def get_animal animal_name
    a_animal = nil
    @pets.each do |animal|
      if animal.get_name == animal_name
        a_animal = animal
      end
    end
    return a_animal
  end

  def return_animal animal_name
    a_animal = get_animal animal_name
    if a_animal != nil
      @pets.delete(a_animal)
    end
    return a_animal
  end

  def add_animal a_animal
    @pets.push a_animal
  end

  def to_s
    "Name : #{@name}, Number of Children : #{@num_children}, Age : #{@age}, I have #{@pets.size} pets. \nPets : #{@pets.join(', ')}"
  end
end
