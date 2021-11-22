import Select from 'react-select';
import CustomButton from '~components/CustomButton';
import { SCHOOL_DATA } from '~constants/schools';
import { CProductSizes } from '~types/product';
import * as Styled from './styles';

function AddNewProductForm() {
  const schools = SCHOOL_DATA.map((school) => ({ value: school.id, label: school.name }));
  const schoolOptions = [{ value: 'generic', label: 'Genérico' }, ...schools];
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));

  return (
    <Styled.AddNewProductFormContainer>
      <form className="form">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="price">Precio</label>
        <input type="text" name="price" />
        <label htmlFor="school">Escuela</label>
        <Select
          options={schoolOptions}
          isMulti={false}
          closeMenuOnSelect
          placeholder="Escuela"
          noOptionsMessage={() => 'No hay más opciones'}
        />
        <label htmlFor="photo">Escuela</label>
        <input id="photo" type="file" name="photo" accept="image/png" style={{ display: 'none' }} />
        <Select
          options={sizesOptions}
          isMulti
          closeMenuOnSelect={false}
          placeholder="Talles"
          noOptionsMessage={() => 'No hay más opciones'}
        />
        <CustomButton size="small" weight="regular">
          Añadir
        </CustomButton>
      </form>
    </Styled.AddNewProductFormContainer>
  );
}

export default AddNewProductForm;
