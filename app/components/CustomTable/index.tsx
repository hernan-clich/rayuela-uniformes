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
import { EDbCollections } from '~types/db';
import { TOrder } from '~types/order';
import { TProduct } from '~types/product';
import { grantAdminRole } from './helpers';
import * as Styled from './styles';
import { CustomTableProps } from './types';

function CustomTable({ columnHeaders, tableContent, rowActions }: CustomTableProps) {
  const { isAdmin } = useAuth();

  const { deleteDbDocument } = useDbCrud(EDbCollections.products);
  const { updateDbDocument } = useDbCrud(EDbCollections.orders);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDeletionConfirmedModal, setShowDeletionConfirmedModal] = useState(false);
  const stockBySizeData = tableContent?.[0]?.stockBySize
    ? tableContent?.map((data) => Object.entries(data?.stockBySize as TProduct['stockBySize']))
    : null;

  return (
    <Styled.CustomTableContainer fieldsLength={columnHeaders?.length}>
      <header className="tableHeader">
        {columnHeaders?.map(({ propertyName, displayName }) => (
          <div key={propertyName} className="tableTd">
            <CustomText
              as="span"
              size="xsmall"
              weight="bold"
              textTransform="uppercase"
              className="headerItem"
            >
              {displayName}
            </CustomText>
          </div>
        ))}
      </header>
      <main className="tableBody">
        {tableContent?.map((body, i) => (
          <Styled.TableRowContainer key={body.id} isLastRow={i === tableContent.length - 1}>
            {body?.imageUrl && (
              <div className="tableTd">
                <img src={body?.imageUrl} alt="Thumbnail" className="thumbnail" />
              </div>
            )}
            {body?.textFields?.map((char) => (
              <div key={char} className="tableTd">
                <CustomText as="span" size="xsmall" weight="bold">
                  {char}
                </CustomText>
              </div>
            ))}
            {stockBySizeData && (
              <div className="tableTd">
                <div className="sizesContainer">
                  {stockBySizeData[i].map(([size, hasStock]) => (
                    <div
                      key={size}
                      className={clsx('chip', {
                        red: !hasStock,
                        green: hasStock
                      })}
                    >
                      <CustomText as="span" size="xsmall" weight="bold">
                        {size}
                      </CustomText>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {body?.isDelivered !== undefined && body?.isPayed !== undefined && (
              <>
                <div className="tableTd">
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
                  <Link href={{ pathname: PATHS.ORDER, query: { id: body.id } }}>
                    <a className="ctaBtn" title="Editar">
                      <OrderIcon />
                    </a>
                  </Link>
                </div>
              </>
            )}
            {body?.isAdmin !== undefined && (
              <>
                <div className="tableTd">
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
              </>
            )}
            {rowActions && (
              <div className="tableTd">
                {rowActions.edit && (
                  <Link href={{ pathname: PATHS.ADMIN_PRODUCT_FORM_EDIT, query: { id: body.id } }}>
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
