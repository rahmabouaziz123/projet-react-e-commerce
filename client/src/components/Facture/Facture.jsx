import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@nextui-org/react";
import "./Facture.css";
// import { addToFacture } from "../../redux/actions/actionFacture";

export const Facture = () => {
  const { user, loading } = useSelector((state) => state.userReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [total1, setTotal1] = useState();
  // console.log(user)
  // console.log(cartItems);
  ///////////////////////////////////////12/12/2022
  // const [description, setDescription] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [image, setImage] = useState("");
  // const [unite, setUnite] = useState("");
  // const [puht, setPuht] = useState("");
  // const [tva, setTva] = useState("");
  // const [totalht, setTotalht] = useState("");
  // const [nameProd, setNameProd] = useState("");
  // const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    

  //   const newFacture= {
  //     description,
  //     quantity,
  //   };
  //   dispatch(addToFacture(newFacture));
  //   setDescription("");
  //   setQuantity("");
  // };
  //////////////////////////////////////////12/12/2022


  let x=0;
  let y=x;
  useEffect(() => {
    let total1 = 0;
    setTotal1(total1);
  }, [total1, cartItems]);

  return (
    <div>
  <form >
      <div className="plm"   >
      <div className="container5">
        <div className="invoice">
          <div className="row">
            <div className="col-7">
              {/* <img
                src="https://s3.eu-central-1.amazonaws.com/zl-clients-sharings/90Tech.png"
                className="logo"
              /> */}
              <img src="../../img/loginMongo.png" alt="" className="imgmangfac" />
            </div>
            <div className="col-5">
              <h1 className="document-type display-4">FACTURE</h1>
              <p className="text-right">
                <strong>N°90T-17-01-0123</strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <p>
                <strong>90TECH SAS</strong>
                <br />
                Passeig de Gràcia, 36 08007
                <br />
                Barcelona, España.
              </p>
            </div>
            <div className="col-5">
              <br />
              <br />
              <p>
                <strong>Energies54</strong>
                <br />
                Réf. Client <em>{user.fullName}</em>
                <br />
                12 Rue de Verdun
                <br />
                {user.adresse}
              </p>
            </div>
          </div>
          <br />
          <br />
          <h6>
            Audits et rapports mensuels (1er Novembre 2022 - 30 Novembre 2022)
          </h6>
          <br />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantité</th>
                <th>Unité</th>
                <th>PU HT</th>
                <th>TVA</th>
                <th>Total HT</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((el, index) => (
                <tr key={index}>
                  <td >{el.nameProd} </td>
                  <td>{el.qty}</td>
                  <td>DT</td>
                  <td className="text-right">
                    <span>{el.price}</span>
                    <span> DT</span>
                  </td>
                  <td>19%</td>
 
                  {/* <td className="text-right">{Number(el.price)+ Number(el.price)*Number(20)/Number(100)}</td> */}
                 <td className="som1">{x=(Number(el.price)* Number(el.qty))} </td>
                  <td className="text-right">{x}</td>
                  <td className="som1">{y+=x} </td>
                  

                  {/* <td className="text-right">{total1}</td> */}
                 </tr>
              ))}

              {/* <tr>
          <td>Génération des rapports d'activité</td>
          <td>4</td>
          <td>Rapport</td>
          <td className="text-right">800,00€</td>
          <td>20%</td>
          <td className="text-right">3 200,00€</td>
        </tr> */}
            </tbody>
          </table>
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <table className="table table-sm text-right">
                <tr>
                  <td>
                    <strong>Total HT</strong>
                  </td>
                  <td className="text-right">{y}</td>
                </tr>
                <tr>
                  <td>TVA 19%</td>
                  <td className="text-right">{(Number(y)*(20))/100}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total TTC</strong>
                  </td>
                  <td className="text-right">{y+ (Number(y)*(19))/100}</td>
                </tr>
              </table>
            </div>
          </div>

          <p className="conditions">
            En votre aimable règlement
            <br />
            Et avec nos remerciements.
            <br />
            <br />
            Conditions de paiement : paiement à réception de facture, à 15
            jours.
            <br />
            Aucun escompte consenti pour règlement anticipé.
            <br />
            Règlement par virement bancaire.
            <br />
            <br />
            En cas de retard de paiement, indemnité forfaitaire pour frais de
            recouvrement : 40 euros (art. L.4413 et L.4416 code du commerce).
          </p>

          <br />
          <br />
          <br />
          <br />

          <p className="bottom-page text-right">
            90TECH SAS - N° SIRET 80897753200015 RCS METZ
            <br />
            6B, Rue aux Saussaies des Dames - 57950 MONTIGNY-LES-METZ 03 55 80
            42 62 - www.90tech.fr
            <br />
            Code APE 6201Z - N° TVA Intracom. FR 77 808977532
            <br />
            IBAN FR76 1470 7034 0031 4211 7882 825 - SWIFT CCBPFRPPMTZ
          </p>
          <p> <Grid>
        {/* <Button flat color="warning" auto    type="submit"   >
          Confirm
        </Button> */}
      </Grid> </p>
        </div>
      </div>

   
    </div>
    </form>
    </div>
  );
};
