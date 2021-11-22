import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import CustomButton from '~components/CustomButton';
import { CProductSizes } from '~types/product';
import { CSchools, TSchoolIds } from '~types/schools';
import * as Styled from './styles';

type TFormData = {
  school: TSchoolIds;
};

function AddNewProductForm() {
  const schoolOptions = Object.entries(CSchools).map((school) => {
    const [id, name] = school;
    return { value: id as TSchoolIds, label: name };
  });
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));

  const methods = useForm<TFormData>();
  const { handleSubmit } = methods;

  // @todo: Remove console.log and do something useful please
  // eslint-disable-next-line no-console
  const onSubmit = (data: TFormData) => console.log(data);

  return (
    <Styled.AddNewProductFormContainer>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="price">Precio</label>
        <input type="text" name="price" />
        <label htmlFor="school">Escuela</label>
        <Controller
          control={methods.control}
          defaultValue={schoolOptions[0]?.value}
          name="school"
          render={({ field: { onChange } }) => (
            <Select
              options={schoolOptions}
              instanceId="schoolId"
              isMulti={false}
              closeMenuOnSelect
              placeholder="Escuela"
              noOptionsMessage={() => 'No hay más opciones'}
              onChange={(e) => onChange(e?.value)}
            />
          )}
        />
        <label htmlFor="photo">Escuela</label>
        <input id="photo" type="file" name="photo" accept="image/png" style={{ display: 'none' }} />
        <Select
          options={sizesOptions}
          instanceId="sizeId"
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
