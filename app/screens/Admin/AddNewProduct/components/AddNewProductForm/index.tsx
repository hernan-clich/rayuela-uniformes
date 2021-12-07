import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import useDbMutation from '~hooks/useDbMutation';
import { EDbCollections } from '~types/db';
import { CProductSizes, TProduct } from '~types/product';
import { CSchools, TSchoolIds } from '~types/schools';
import * as Styled from './styles';

type TMultiOptions = MultiValue<{ value: string; label: string }>;

type TFormData = {
  img: FileList;
  name: string;
  price: string;
  school: TSchoolIds;
  stockBySize: TMultiOptions;
};

function AddNewProductForm() {
  const { addStorageFile } = useDbMutation(EDbCollections.products);
  const schoolOptions = Object.entries(CSchools).map((school) => {
    const [id, name] = school;
    return { value: id as TSchoolIds, label: name };
  });
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));
  const [availableSizes, setAvailableSizes] = useState<TMultiOptions>([]);

  const methods = useForm<TFormData>();
  const { handleSubmit, register } = methods;

  const handleAvailableSizesChange = (newValue: TMultiOptions): void => setAvailableSizes(newValue);

  const onSubmit = ({ img, name, price, school, stockBySize }: TFormData) => {
    const image = img[0];
    const parsedPrice = parseInt(price, 10);
    const stockBySizeValues = stockBySize?.map((size) => size.value);
    const reducedStockBySize: TProduct['stockBySize'] = availableSizes.reduce(
      (acc, size) => ({
        ...acc,
        [size.value]: stockBySizeValues.includes(size.value)
      }),
      {}
    );

    addStorageFile(image, 'products', {
      name,
      school,
      price: parsedPrice,
      stockBySize: reducedStockBySize
    });
  };

  return (
    <Styled.AddNewProductFormContainer>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <CustomText as="label" htmlFor="name" size="small" weight="regular" textAlign="left">
          Nombre
        </CustomText>
        <input type="text" {...register('name', { required: true, minLength: 8 })} />
        <label htmlFor="price">Precio</label>
        <input type="text" {...register('price', { required: true })} />
        <label htmlFor="school">Escuela</label>
        <Controller
          control={methods.control}
          name="school"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Select
              options={schoolOptions}
              instanceId="schoolId"
              isMulti={false}
              closeMenuOnSelect
              placeholder="Escuela"
              onChange={(e) => onChange(e?.value)}
            />
          )}
        />
        <label htmlFor="img">IMG</label>
        <input
          id="img"
          type="file"
          {...register('img', { required: true })}
          accept="image/png"
          style={{ display: 'none' }}
        />
        <label htmlFor="available-sizes">Talles en los que viene el producto</label>
        <Select
          options={sizesOptions}
          instanceId="sizeId"
          name="available-sizes"
          isMulti
          closeMenuOnSelect={false}
          placeholder="Talles"
          noOptionsMessage={() => 'No hay más opciones'}
          onChange={handleAvailableSizesChange}
        />
        {Boolean(availableSizes?.length) && (
          <>
            <label htmlFor="available-sizes">Talles con stock</label>
            <Controller
              control={methods.control}
              name="stockBySize"
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <Select
                  options={availableSizes}
                  instanceId="stockBySizeId"
                  isMulti
                  closeMenuOnSelect={false}
                  placeholder="Stock"
                  noOptionsMessage={() => 'No hay más opciones'}
                  onChange={(e) => onChange(e)}
                />
              )}
            />
          </>
        )}
        <CustomButton type="submit" size="small" weight="regular">
          Añadir
        </CustomButton>
      </form>
    </Styled.AddNewProductFormContainer>
  );
}

export default AddNewProductForm;
