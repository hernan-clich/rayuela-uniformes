import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import CustomText from '~components/CustomText';
import DeleteIcon from '~components/Icons/DeleteIcon';
import EditIcon from '~components/Icons/EditIcon';
import OrderIcon from '~components/Icons/OrderIcon';
import Modal from '~components/Modal';
import ModalBody from '~components/ModalBody';
import PATHS from '~constants/paths';
import { useAuth } from '~hooks/useAuth';
import useDbCrud from '~hooks/useDbCrud';
import useWindowSize from '~hooks/useWindowSize';
import { EDbCollections } from '~types/db';
import { TOrder } from '~types/order';
import MobileLabel from './components/MobileLabel';
import { grantAdminRole } from './helpers';
import * as Styled from './styles';
import { CustomTableProps } from './types';

function CustomTable({ columnHeaders, tableContent, rowActions }: CustomTableProps) {
  const { isAdmin } = useAuth();
  const { isSmallScreen } = useWindowSize();

  const { deleteDbDocument } = useDbCrud(EDbCollections.products);
  const { updateDbDocument } = useDbCrud(EDbCollections.orders);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDeletionConfirmedModal, setShowDeletionConfirmedModal] = useState(false);

  return (
    <Styled.CustomTableContainer fieldsLength={columnHeaders?.desktop?.length}>
      <header className="tableHeader">
        {!isSmallScreen &&
          columnHeaders?.desktop?.map((header) => (
            <div key={header} className="tableTd">
              <CustomText
                as="span"
                size="xsmall"
                weight="bold"
                textTransform="uppercase"
                className="headerItem"
              >
                {header}
              </CustomText>
            </div>
          ))}
      </header>
      <main className="tableBody">
        {tableContent?.map((body, i) => (
          <Styled.TableRowContainer key={body.id} isLastRow={i === tableContent.length - 1}>
            {body?.imageUrl && (
              <div className="tableTd">
                <MobileLabel labelText="Imagen" />
                <img src={body?.imageUrl} alt="Thumbnail" className="thumbnail" />
              </div>
            )}
            {body?.textFields?.map((char, ind) => (
              <div key={char} className="tableTd">
                <MobileLabel labelText={columnHeaders?.mobile?.[ind]} />
                <CustomText as="span" size="xsmall" weight="bold">
                  {char}
                </CustomText>
              </div>
            ))}
            {body?.sizes && (
              <div className="tableTd">
                <MobileLabel labelText="Talles" />
                <div className="sizesContainer">
                  {body?.sizes?.map(({ name, stock }) => (
                    <div
                      key={name}
                      className={clsx('chip', {
                        red: !stock,
                        green: stock
                      })}
                    >
                      <CustomText as="span" size="xsmall" weight="bold">
                        {name}
                      </CustomText>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {body?.isDelivered !== undefined && body?.isPayed !== undefined && (
              <>
                <div className="tableTd">
                  <MobileLabel labelText="Pago" />
                  <div className={clsx('chip', { red: !body?.isPayed, green: body?.isPayed })}>
                    <CustomText as="span" size="xsmall" weight="regular">
                      <button
                        type="button"
                        disabled={!isAdmin}
                        onClick={() => {
                          if (!isAdmin) return;
                          updateDbDocument<TOrder>(body.id, { isPayed: !body.isPayed });
                        }}
                      >
                        {body?.isPayed ? 'Pagado' : 'Pendiente'}
                      </button>
                    </CustomText>
                  </div>
                </div>
                <div className="tableTd">
                  <MobileLabel labelText="Entrega" />
                  <div
                    className={clsx('chip', { red: !body?.isDelivered, green: body?.isDelivered })}
                  >
                    <CustomText as="span" size="xsmall" weight="bold">
                      <button
                        type="button"
                        disabled={!isAdmin}
                        onClick={() => {
                          if (!isAdmin) return;
                          updateDbDocument<TOrder>(body.id, { isDelivered: !body.isDelivered });
                        }}
                      >
                        {body?.isDelivered ? 'Entregado' : 'Pendiente'}
                      </button>
                    </CustomText>
                  </div>
                </div>
                <div className="tableTd">
                  <MobileLabel labelText="Ver" />
                  <Link href={{ pathname: PATHS.ORDER, query: { id: body.id } }}>
                    <a className="ctaBtn" title="Editar">
                      <OrderIcon />
                    </a>
                  </Link>
                </div>
              </>
            )}
            {body?.isAdmin !== undefined && (
              <div className="tableTd">
                <MobileLabel labelText="Tipo" />
                <div className={clsx('chip', { red: !body?.isAdmin, green: body?.isAdmin })}>
                  <CustomText as="span" size="xsmall" weight="regular">
                    <button
                      type="button"
                      onClick={() =>
                        grantAdminRole({ email: body.email, adminStatus: !body.isAdmin })
                      }
                    >
                      {body?.isAdmin ? 'Admin' : 'Usuario'}
                    </button>
                  </CustomText>
                </div>
              </div>
            )}
            {rowActions && (
              <div className="tableTd">
                <MobileLabel labelText="Acciones" />
                <div>
                  {rowActions.edit && (
                    <Link
                      href={{ pathname: PATHS.ADMIN_PRODUCT_FORM_EDIT, query: { id: body.id } }}
                    >
                      <a className="ctaBtn" title="Editar">
                        <EditIcon />
                      </a>
                    </Link>
                  )}
                  {rowActions.delete && (
                    <button
                      type="button"
                      className="ctaBtn"
                      title="Eliminar"
                      onClick={() => setShowConfirmationModal(true)}
                    >
                      <DeleteIcon />
                    </button>
                  )}
                </div>

                <Modal
                  onClose={() => setShowConfirmationModal(false)}
                  closeOnClickOutside={false}
                  showModal={showConfirmationModal}
                >
                  <ModalBody
                    textHeading="Eliminando producto ⛔️"
                    textBody="Estas a punto de eliminar el producto. ¿Deseas continuar?"
                    closeCta={{
                      handler: () => setShowConfirmationModal(false),
                      text: 'Cancelar eliminación'
                    }}
                    buttonCta={{
                      handler: () => {
                        deleteDbDocument(body.id);
                        setShowConfirmationModal(false);
                        setShowDeletionConfirmedModal(true);
                      },
                      text: 'Confirmar eliminación'
                    }}
                  />
                </Modal>
              </div>
            )}
          </Styled.TableRowContainer>
        ))}
      </main>

      <Modal
        onClose={() => setShowDeletionConfirmedModal(false)}
        showModal={showDeletionConfirmedModal}
        closeOnClickOutside={true}
      >
        <ModalBody
          textHeading="Producto eliminado 💣"
          closeCta={{
            handler: () => setShowDeletionConfirmedModal(false),
            text: 'Volver al listado'
          }}
        />
      </Modal>
    </Styled.CustomTableContainer>
  );
}

export default CustomTable;
