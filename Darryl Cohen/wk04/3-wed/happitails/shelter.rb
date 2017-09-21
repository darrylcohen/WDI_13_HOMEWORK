class Shelter

  def initialize name, address
    @name = name
    @address = address
    @animals =[]
    @clients = []
  end

  def display_clients
    @clients.each do |client|
      puts client.to_s

    end
  end

  def display_animals
    @animals.each do |animal|
      puts animal.to_s
    end
  end

  def remove_animal a_animal
    @animals.delete(a_animal)
  end

  def add_animal an_Animal
    @animals.push an_Animal
  end

  def add_client a_client
    @clients.push a_client
  end

  def get_client client_name
    a_client = nil
    @clients.each do |client|
      if client.get_name == client_name
        a_client = client
      end
    end
    return a_client
  end

  def get_animal animal_name
    a_animal = nil
    @animals.each do |animal|
      if animal.get_name == animal_name
        a_animal = animal
      end
    end
    return a_animal
  end

  def adopt_animal client_name, animal_name
    a_client = get_client client_name
    a_animal = get_animal animal_name

    if a_client ==  nil || a_animal == nil
      puts "\nSorry that Client or Animal doesn't exist "
    else
      a_client.add_animal a_animal
      remove_animal a_animal
      puts "\nAdoption Succesful"
    end
  end

  def return_animal client_name, animal_name
    a_client = get_client client_name

    if a_client ==  nil
      puts "\nSorry that Client doesn't exist "
    else
      a_animal = a_client.return_animal animal_name
      if a_animal == nil
        puts "\nSorry that Animal doesn't exist "
      else
        puts "\nReturn Succesful "
      @animals.push(a_animal)
      end
    end
  end

end
